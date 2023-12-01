import ProductCarousel from './ProductCarousel';
import BrandButton from './BrandButton';


function ShowBrandProduct({ products, clicked, onAdd }) {

    const handleBrandClick = (brandId) => {
        const element = document.getElementById(brandId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div>
            <div className="brand-buttons-container" >
                {['JUSTFORYOU', 'CLOTHES', 'PERFUME', 'SHOES'].map(brand => (
                    <BrandButton key={brand} brandName={brand} clicked={clicked} onClick={() => handleBrandClick(brand.toLowerCase())} />
                ))}

            </div>
            {products.JUSTFORYOU && (
                <div id="justforyou">
                    <ProductCarousel products={products.JUSTFORYOU} clicked={clicked} brand="JUST FOR YOU" onAdd={onAdd}/>
                </div>
            )}

            {products.Clothes && (
                <div id="clothes">
                    <ProductCarousel products={products.Clothes} clicked={clicked} brand="Clothes" onAdd={onAdd}/>
                </div>
            )}

            {products.Perfume && (
                <div id="perfume">
                    <ProductCarousel products={products.Perfume} clicked={clicked} brand="Perfume" onAdd={onAdd}/>
                </div>
            )}

            {products.Shoes && (
                <div id="shoes">
                    <ProductCarousel products={products.Shoes} clicked={clicked} brand="Shoes" onAdd={onAdd}/>
                </div>
            )}
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default ShowBrandProduct;