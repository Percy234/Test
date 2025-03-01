export default function Star({ currentStar, star, click }) {
    return (
        <div>
            {Array.from({ length: currentStar }, (_, index) => (
                <i onClick={click} style={{color: "yellow"}} data-index={index+1} key={index} className="bi bi-star-fill"></i> 
            ))}
            {Array.from({ length: star }, (_, index) => (
                <i onClick={click} data-index={index+1+currentStar} key={index} className="bi bi-star-fill"></i> 
            ))}
        </div>
    );
}
