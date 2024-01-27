import "@/Components/signup/Buttons/SignupButtons.scss";

interface TextProps {
  title: string;
}

function SignupButtons({ title }: TextProps) {
  return <button className="button-block">{title}</button>;
}

export default SignupButtons;
