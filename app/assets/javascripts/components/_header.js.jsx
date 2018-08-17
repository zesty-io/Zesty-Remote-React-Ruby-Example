class Header extends React.Component {
    render() {
        return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
      <div className="container">
		  <a className="navbar-brand" href="/">Zesty Burger</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="site-nav">

          <ul className="navbar-nav ml-auto">

            <li className="nav-item"><a href="#section-home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#section-about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#section-offer" className="nav-link">Locations</a></li>
            <li className="nav-item"><a href="#section-menu" className="nav-link">Menu</a></li>
            <li className="nav-item"><a href="#section-news" className="nav-link">Events</a></li>
            <li className="nav-item"><a href="#section-gallery" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="#section-contact" className="nav-link">Careers</a></li>
          </ul>
        </div>
      </div>
    </nav>
</div>
        )
    }
}