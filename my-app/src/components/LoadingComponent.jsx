
import './style.css'
function LoadingComponent() {
    return (
        <div className="loading-container">
            <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJ1ZDUxdml3bGIwY2xkZmxlZmFjbTBrcnNkcTJtbzN0MGVtMmJycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZO9b1ntYVJmjZlsWlm/giphy.gif"
                alt="Loading..."
                className="loading-gif"
            />
        </div>
    );
}
export default LoadingComponent;