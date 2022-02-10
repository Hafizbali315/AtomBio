import Navbar from './components/Navbar'
import CreateAccountSection from './components/CreateAccountSection'
import SeeGallerySection from './components/SeeGallerySection'
import IncreaseVisitsSection from './components/IncreaseVisitsSection'
import PromoteProductsSection from './components/PromoteProductsSection'

function App() {
	return (
		<div className="App">
			<Navbar />
			<CreateAccountSection /> {/* Section 1 */}
			<SeeGallerySection /> {/* Section 2 */}
			<IncreaseVisitsSection /> {/* Section 3 */}
			<PromoteProductsSection /> {/* Section 4 */}
		</div>
	)
}

export default App
