function Empty(clicked) {
    return (
        <div className={`empty-text ${clicked ? 'clicked' : ''}`}>
            Your bag is empty.
        </div>
    );
}

export default Empty;