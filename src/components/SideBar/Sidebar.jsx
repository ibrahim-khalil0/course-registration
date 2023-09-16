import Selected from "../Selected/Selected";

const Sidebar = ({selected, creditTime, remainingCredit, totalPrice}) => {
    return (
        <div className="w-[25%]">
            <div className="bg-white rounded-lg p-4">
                <h1 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remainingCredit} hr</h1>
                <hr className="my-5"/>
                <h2 className="text-xl font-bold mb-6">Course Name</h2>
                {
                    selected.map((selectedCourse, idx) => <Selected 
                    key={idx} 
                    selectedCourse={selectedCourse}
                    idx={idx}
                    ></Selected>)
                }
                <hr className="my-5"/>
                <h3>Total Credit Hour : {creditTime}</h3>
                <hr className="my-5"/>
                <h1>Total Price : {totalPrice} USD</h1>
            </div>
        </div>
    );
};

export default Sidebar;