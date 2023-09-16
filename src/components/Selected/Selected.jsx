const Selected = ({selectedCourse, idx}) => {
    return (
        <div>
                <h3 className="text-base font-normal text-gray-600 mb-3">{idx + 1} {selectedCourse}</h3>
                <h3></h3>
        </div>
    );
};

export default Selected;