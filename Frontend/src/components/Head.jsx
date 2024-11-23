import { Link } from 'react-router-dom';

export default function Head() {
    const linkStyle = {
        textDecoration: 'none',
        color: '#f5400f'
    }
  return (
    <nav>
        <div className="logo">
            <Link to={'/home'} style={linkStyle}><h2>Note App</h2></Link>
        </div>
        <div className="action">
            <Link to={'/'}><button>Logout</button></Link>
        </div>
    </nav>
  )
}
