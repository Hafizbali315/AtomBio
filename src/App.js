import Navbar from './components/Navbar'
import CreateAccountSection from './components/CreateAccountSection'
import SeeGallerySection from './components/SeeGallerySection'
import IncreaseVisitsSection from './components/IncreaseVisitsSection'

function App() {
	return (
		<div className="App">
			<Navbar />
			<CreateAccountSection /> {/* Section 1 */}
			<SeeGallerySection /> {/* Section 2 */}
			<IncreaseVisitsSection /> {/* Section 3 */}
		</div>
	)
}

export default App
