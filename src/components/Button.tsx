type buttonProps = {
  btnType: 'button' | 'submit' | 'reset',
  text: string
}

export default function Button({ btnType, text }: buttonProps) {
  return (
    <button className="general-btn" type={btnType}>{text}</button>
  )
}