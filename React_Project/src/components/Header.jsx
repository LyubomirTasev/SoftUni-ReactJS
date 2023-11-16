export default function Header() {
    return (
    <div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="img/open-view.jpg">
  <nav id="tm-nav" className="fixed w-full">
      <div className="tm-container mx-auto px-2 md:py-6 text-right">
          <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
          <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
              <li className="inline-block mb-4 mx-4"><a href="#intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-gold py-1 md:py-3 px-4">About</a></li>
              <li className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-gold py-1 md:py-3 px-4">Contact</a></li>
          </ul>
      </div>            
  </nav>
  <div className="container mx-auto px-2 tm-intro-width">
      <div className="sm:pb-60 sm:pt-48 py-20">
          <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
              <h1 className="text-white text-5xl tm-logo-font mb-5">Кафе-клуб "ЧасовникЪ" </h1>
              <p className="tm-text-gold tm-text-2xl">мястото, където старинният стил е</p>
          </div>    
          <div className="bg-black bg-opacity-70 p-10 mb-5">
              <p className="text-white leading-8 text-sm font-light">
                  This is a coffee shop template named Antique Cafe which is a parallax HTML5 template with a good responsiveness.
                  Feel free to use this layout for your cafe.
                  If you have any question, please <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">send us a message</a>. </p>
          </div>
          <div className="text-center">
              <div className="inline-block">
                  <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                      <i className="fas fa-coffee mr-3"></i>
                      <span>Let's explore...</span>                        
                  </a>
              </div>                    
          </div>                
      </div>
  </div>        
</div>
    )
}