import ProductCarousel from './ProductCarousel';
import BrandButton from './BrandButton';


function ShowProduct({ products, clicked, onAdd }) {

    const handleBrandClick = (brandId) => {
        const element = document.getElementById(brandId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div>
            <div className="brand-buttons-container">
                {['JUSTFORYOU', 'GUCCI', 'CHANEL', 'HERMES'].map(brand => (
                    <BrandButton key={brand} brandName={brand} onClick={() => {
                        handleBrandClick(brand.toLowerCase())
                    }} />

                ))}

            </div>
            {products.JUSTFORYOU && (
                <div id="justforyou">
                    <ProductCarousel products={products.JUSTFORYOU} clicked={clicked} brand="JUST FOR YOU" onAdd={onAdd}/>
                </div>
            )}

            {products.Chanel && (
                <div id="chanel">
                    <ProductCarousel products={products.Chanel} clicked={clicked} brand="CHANEL" onAdd={onAdd}/>
                </div>
            )}

            {products.Gucci && (
                <div id="gucci">
                    <ProductCarousel products={products.Gucci} clicked={clicked} brand="GUCCI" onAdd={onAdd}/>
                </div>
            )}

            {products.Hermes && (
                <div id="hermes">
                    <ProductCarousel products={products.Hermes} clicked={clicked} brand="HERMES" onAdd={onAdd}/>
                </div>
            )}
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default ShowProduct;