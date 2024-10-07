type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
};

const Counter = ({ setCount, children }: CounterProps): React.ReactElement => {
    return (
        <div>
            {children}
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prev) => prev - 1)}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
