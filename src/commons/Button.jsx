export default function Button(props) {

    const {message, buttonStyle} =props;

    return <button className={buttonStyle}>{message}</button>;
  }