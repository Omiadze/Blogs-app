const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-7 text-center text-primary-foreground">
        <h1 className="mb-5 text-5xl font-bold">About BitBlogs</h1>
        <p className="text-primary-foreground">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>
      <div className="flex items-center justify-center gap-24">
        <div className="flex max-w-72 flex-col text-primary-foreground">
          <h1 className="mb-4 text-4xl font-bold">Our Mission</h1>
          <p className="text-primary-foreground">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
