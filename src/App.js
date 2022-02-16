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
			<CreateAccountSection />
			<SeeGallerySection />
			<IncreaseVisitsSection />
			<PromoteProductsSection />
			<ShareYoutubeSection />
			<GenerateLeadsSection />
			<AnalyzeTraficSection />
			<PromoteNgosSection />
			<TipsSection />
			<AtomSection />
			<Footer />
		</div>
	)
}

export default App
