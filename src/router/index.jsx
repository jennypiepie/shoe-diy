import App from '../App'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Customizer from '../pages/Customizer';
import Works from '../pages/Works';

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/customizer' element={<Customizer />}></Route>
            <Route path='/works' element={ <Works/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;
