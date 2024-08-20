interface SpacerProps {
    height?: number | string;
    width?: number | string;
}

const Spacer: React.FC<SpacerProps> = ({ height, width }) => {
    return (
        <div
            style={{
                height: height || 0,
                width: width || 0,
            }}
        />
    );
};

export default Spacer;