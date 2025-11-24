import {Link} from 'react-router-dom'
function Button(props) {
  return (
    <Link className={props.class} to={props.links}>{props.text}</Link>
  )
}

export default Button