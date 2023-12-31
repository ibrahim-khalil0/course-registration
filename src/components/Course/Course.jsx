import { FaBookOpen} from 'react-icons/fa';


const Course = ({course, selectedCourse}) => {
    const {title, image, price, details, credit_time} = course
    return (
        <div className="bg-white p-4 rounded-xl space-y-5">
            <img className="w-full" src={image} alt="" />
            <h1 className='text-xl font-semibold'>{title}</h1>
            <p className='text-sm font-normal text-gray-600 leading-[28px]'>{details}</p>
            <div className='flex gap-4 text-base text-gray-600 font-medium items-center'>
                <span>$</span>
                <span>Price : {price}</span>
                <span><FaBookOpen></FaBookOpen></span>
                <span>Credit : {credit_time}hrs</span>
            </div>
            <button onClick={ () => selectedCourse(title, price, credit_time)} className='bg-[#2F80ED] w-full text-white rounded-xl py-2 font-semibold text-lg'>Select</button>
        </div>
    );
};

export default Course;