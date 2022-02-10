import Navbar from './components/Navbar'
import CreateAccountSection from './components/CreateAccountSection'
import SeeGallerySection from './components/SeeGallerySection'

function App() {
	return (
		<div className="App">
			<Navbar />
			<CreateAccountSection /> {/* Section 1 */}
			<SeeGallerySection /> {/* Section 2 */}
		</div>
	)
}

export default App
