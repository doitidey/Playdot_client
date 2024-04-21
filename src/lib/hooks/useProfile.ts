import { nicknameCheck, putProfile } from "../api/signupAPI";
import {
  useInputStore,
  usePreviewStore,
  useValidStore,
} from "../store/updateUserStore";
import { rInputRegexs } from "../util/signupValid";

export const useProfile = () => {
  const { previewUrl, setPreviewUrl } = usePreviewStore();
  const { validStore, setValidStore, setValidStoreEmpty } = useValidStore();
  const { inputStore, setInputStore, setInputStoreEmpty } = useInputStore();

  const onClickUpload = (imageInputRef: HTMLInputElement) => {
    if (imageInputRef) {
      imageInputRef.current.click();
    }
  };

  const onFileChange = (imageInputRef: HTMLInputElement) => {
    const file = imageInputRef.current.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
    }
  };

  const onClickNicknameCheck = async () => {
    try {
      if (inputStore.validNickname) {
        const res = await nicknameCheck(inputStore.nickname);
        if (res.data.exist) {
          setValidStore({
            ...validStore,
            validNickname: "중복된 닉네임이야!",
          });
        } else {
          setInputStore({ ...inputStore, noneDuplicationNickname: true });
          setValidStore({
            ...validStore,
            validNickname: "사용 가능한 닉네임이야!",
          });
        }
      }
    } catch {
      console.error("닉네임 체크 APi 오류");
    }
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setInputStore({
      ...inputStore,
      noneDuplicationNickname: false,
      validNickname: false,
      nickname: nickname,
    });
    if (rInputRegexs.nicknameRegex.test(nickname)) {
      setValidStore({
        ...validStore,
        validNickname: "",
      });
      setInputStore({
        ...inputStore,
        validNickname: true,
      });
    } else {
      setValidStore({
        ...validStore,
        validNickname: "닉네임은 문자나 숫자로 2자에서 7자 이내로 설정해줘!",
      });
    }
  };

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setInputStore({
      ...inputStore,
      comment,
    });
    rInputRegexs.commentRegex.test(comment) ||
      setValidStore({
        ...validStore,
        validComment: "한마디는 90자 이내로 작성해줘!",
      });
  };

  const isSubmitRequired = () => {
    return (
      inputStore.nickname &&
      inputStore.validNickname &&
      inputStore.noneDuplicationNickname &&
      inputStore.comment
    );
  };

  const onSubmit = (imageInputRef: HTMLInputElement) => {
    try {
      // 팀 설정 api
      // putTeam(clickedCardStore);

      // 폼 데이터 만들기
      const formData = new FormData();
      formData.append("profileImage", imageInputRef.current.files?.[0] || "");
      formData.append(
        "data",
        JSON.stringify({
          nickname: inputStore.nickname,
          comment: inputStore.comment,
        }),
      );

      // formData 확인용 console
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      // 프로필 설정 api
      putProfile(formData);
    } catch {
      alert("api 오류");
    }
  };
  const resetProfile = () => {
    setValidStoreEmpty();
    setInputStoreEmpty();
    setPreviewUrl("");
  };

  return {
    previewUrl,
    validStore,
    inputStore,
    onClickUpload,
    onFileChange,
    onClickNicknameCheck,
    onChangeNickname,
    onChangeComment,
    isSubmitRequired,
    onSubmit,
    resetProfile,
  };
};
