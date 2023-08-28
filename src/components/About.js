
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../assets/gass5.mp3'
const About = () => {

    return (


        <section className="bg-primary px-5 text-white py-0 md:py-40 m-10 pb-5 md:pb-30 " id="about">

            <h1 className=" px-10 md:px-40 m-10">
                <p className="text-3xl lg:text-4xl font-mono">About</p>



            </h1>
            <div className="container mx-auto md:py-20 md:px-20">

                {/* DESC */}
                <div className="pb-5 md:pb-0">
                    <div className="font-mono  md:hidden ">


                        <p>

                    
                        &nbsp;	&nbsp;My name is William Cui and I am an avid problem solver and engineer working to build innovative solutions.
                            I have experience working with Full-Stack Development and Data Analysis. Currently working on learning DevOps.</p>
                            <p>
                        <br></br>
                            &nbsp;	&nbsp;My expertise lie in Java, Python, ReactJS, NextJS, AWS, and SQL. I am currently looking for a new graduate or junior position for software related roles. 
                            In my spare time I enjoy building projects, writing and producing music, and DJing.


                        </p>



                            


                    </div>

                    <div className="font-mono hidden md:block w-9/12">

                        <p>
                            Welcome to my portfolio! </p>
                        <p>

                            <br></br>
                            My name is William Cui and I am an avid problem solver and engineer working to build innovative solutions. I graduated from the 
                            University of British Columbia with a Bachelor's of Science with a focus in Computer Science and Mathematics. 
                            I have experience working with Full-Stack Development and Data Analysis, and currently working on learning DevOps.
                            My expertise lie in Java, Python, ReactJS, NextJS, AWS, and SQL. I am currently looking for a new graduate or junior position for software related roles.


                        </p>

                        <br></br>
                        <br></br>
                        <p>
                            In my spare time I enjoy building projects, writing and producing music, and DJing. Here is a snippet of my music:
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <AudioPlayer
                            
                            src={song}
                            onPlay={e => console.log("onPlay")}
                        // other props here
                        />

                    </div>
                </div>


            </div>

        </section>



    );

}
export default About;