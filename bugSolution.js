```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Component rendered with count:', count);
  }, [count]); // Added count to the dependency array

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Use functional update for better performance
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```