import Selected from "../Selected/Selected";

const Sidebar = ({selected, creditTime, remainingCredit, totalPrice}) => {
    return (
        <div className="lg:w-[25%] relative">
            <div className="bg-white rounded-lg p-4 sticky top-0">
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
                <h3 className="text-base text-gray-700 font-medium">Total Credit Hour : {creditTime}</h3>
                <hr className="my-5"/>
                <h1 className="text-base text-gray-700 font-semibold">Total Price : {totalPrice} USD</h1>
            </div>
        </div>
    );
};

export default Sidebar;