import React from 'react';

const HomeCarousel = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("hostel/ (1).jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">মিনি চিরিয়াখানা</h1>
            <p className="mb-5">
              <span className='text-secondary'>
                হাজী মোহাম্মাদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
              </span>{" "}
              হতে ১০ মিনিট দুরে অবস্থিত হোস্টেল। সবসময় সুবিধাজনক এবং সুরক্ষিত এ হোস্টেলে রয়েছে সার্বক্ষণিক বিদ্যুৎ বাবস্থা। নিরিবিলি পরিবেশ, খেলার জন্য পর্যাপ্ত মাঠ, হোস্টেলে অবস্থানরত অন্যান্য শিক্ষার্থীদের সাহায্যপরায়নতা আমাদের এ হোস্টেলকে করেছে অনন্য। আমাদের এই ছোট পরিবারে আপনার স্বাগতম।
            </p>
            <button className="btn btn-primary">ঘুরে দেখুন</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;