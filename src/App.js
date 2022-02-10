import Navbar from './components/Navbar'
import CreateAccountSection from './components/CreateAccountSection'
import SeeGallerySection from './components/SeeGallerySection'
import IncreaseVisitsSection from './components/IncreaseVisitsSection'
import PromoteProductsSection from './components/PromoteProductsSection'
import ShareYoutubeSection from './components/ShareYoutubeSection'
import GenerateLeadsSection from './components/GenerateLeadsSection'
import AnalyzeTraficSection from './components/AnalyzeTraficSection'
import PromoteNgosSection from './components/PromoteNgosSection'
import TipsSection from './components/TipsSection'
import AtomSection from './components/AtomSection'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Navbar />
			<CreateAccountSection /> {/* Section 1 */}
			<SeeGallerySection /> {/* Section 2 */}
			<IncreaseVisitsSection /> {/* Section 3 */}
			<PromoteProductsSection /> {/* Section 4 */}
			<ShareYoutubeSection /> {/* Section 5 */}
			<GenerateLeadsSection /> {/* Section 6 */}
			<AnalyzeTraficSection /> {/* Section 7 */}
			<PromoteNgosSection /> {/* Section 8 */}
			<TipsSection /> {/* Section 9 */}
			<AtomSection /> {/* Section 10 */}
			<Footer />
		</div>
	)
}

export default App
