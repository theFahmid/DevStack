import logo from '../assets/logo-text.png'
export default function Footer() {
  return (
    <footer>
      <div className="w-[90%] mx-auto max-w-325 grid-cols-2 md:grid-cols-6">
        <div>
            <img src={logo} alt="DevStack" />
            <p>Curated tools, technologies, and resources for developers building modern software.</p>
            <div className='flex gap-4'>
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
        <div>
            
        </div>
      </div>
    </footer>
  );
}
