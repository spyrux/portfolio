
import AmazonImage from "../assets/amazon.png";
import EAImage from "../assets/electronicarts.png";
import RBCImage from "../assets/rbc.png"
const Experience = () => {

    return (


        <section className="bg-primary px-10 text-white py-0 md:py-40 m-10 pb-5 md:pb-0 " id="experience">
            <h1 className="text-align: center md:px-36 m-10">
                <p className="text-3xl lg:text-4xl font-mono">Experience</p>



            </h1>
            <div className="container mx-auto grid md:grid-cols-2 justify-center  md:justify-between pb-5  md:py-20 md:px-20">

                {/* DESC */}
                <div className="pb-5 md:pb-0">
                    <p className="text-center font-bold font-mono md:hidden">
                        Amazon
                    </p>

                    <div className="font-mono hidden md:block">
                        <h className = "font-bold">
                            May 2021 - Aug 2021
                        </h>
                        <p>
                            Worked as a Software Engineering Intern at Amazon as a part of the External Tokenization team to build an internal service to 
                            assist On-Call Engineers in monitoring service failures.
                            Designed and documented the project with wire frames, micro-service architecture, and flow design. Project utilized AWS Lambda,
                            IAM Roles, S3, API Gateways, and CloudWatch Logs.
                        
                      
                        </p>
                    </div>
                </div>

                {/* IMG */}
                <div>
                    <img
                        src={AmazonImage}
                        alt="coding illustration"
                        className=" w-40 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20 "
                    />
                </div>

            </div>

            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between pb-5 md:py-20 md:px-20">
                {/* DESC */}
                <div className="pb-5 md:pb-0">
                    <p className="text-center font-bold font-mono md:hidden">
                        Electronic Arts
                    </p>


                    <div className="font-mono hidden md:block">
                        <h className = "font-bold">
                            Jan 2021 - May 2021
                        </h>
                        <p>
                            Worked as a Software Engineering Intern at Electronic Arts as a part of the Fifa Ultimate back-end team, which provided services to over 25 million users.
                            Built API's to handle new item creations for FIFA 2023. Documented, tested, and wrote the endpoints and logic necessary to update the SQL database. 
                           
                        
                      
                        </p>
                    </div>
                </div>

                {/* IMG */}
                <div>
                    <img
                        src={EAImage}
                        alt="coding illustration"
                        className=" w-40 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20 "
                    />
                </div>
            </div>


            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center pb-5  md:justify-between md:py-20 md:px-20">
                {/* DESC */}
                <div className="text-align: center pb-5 md:pb-0 ">
                    <p className="text-center font-semibold font-mono md:hidden">
                        Royal Bank of Canada
                    </p>

                    <div className="font-mono hidden md:block">
                        <h className = "font-bold">
                            Jan 2021 - May 2021
                        </h>
                        <p>
                            Worked as a Software Engineering Intern at the Royal Bank of Canada as a part of the Cloud Enablement team. Built and deployed on internal cloud,
                            a full-stack web application, made with VueJS, Spring Boot, and SQLite, to store and display of cloud customer data.
                            Utilized Python, ElasticSearch, LogStash and Kibana to pipeline and display customer data analytics.
                           
                        
                      
                        </p>
                    </div>
                </div>

                {/* IMG */}
                <div >
                    <img
                        src={RBCImage}
                        alt="coding illustration"
                        className=" w-40 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20 "
                    />
                </div>
            </div>




        </section>



    );


}

export default Experience;