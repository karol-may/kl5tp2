function Link({href,text}){
  return (<a href={href}>{text}</a>);
}

function RedLink({href,text}){
  return (<a style={{color: "red"}} href={href}>{text}</a>);
}

export { Link, RedLink };