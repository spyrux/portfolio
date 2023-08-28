
import FSImage from "../assets/futurestore.png";
import CCImage from "../assets/ccdefault.png";
import RBCImage from "../assets/rbc.png"

const Projects = () => {

    return(
    
        
        <section className="bg-primary px-10 text-white py-0 md:py-40 m-10 pb-5 md:pb-0 " id="projects">
            <h1 className="text-align: center md:px-36 m-10">
                <p className="text-3xl lg:text-4xl font-mono">Projects</p>



            </h1>
            <div className="container mx-auto grid md:grid-cols-2 justify-center  md:justify-between pb-5  md:py-20 md:px-20">

                {/* DESC */}
                <div className="pb-5 md:pb-0">
                    <p className="text-center font-bold font-mono md:hidden">
                        Future Store
                    </p>

                    <div className="font-mono hidden md:block">
                        <h className = "font-bold">
                            Future Store 
                        </h>
                        <p>
                            Future Store is a Web3 e-commerce and social platforms, which enables real-time connections and interactions between businesses and consumers through live-streams.
                            Built the project with NextJS at nwHacks 2023 with a team of 4 in under 24 hours. Won the LivePeer Best Integration Award. 
                        </p>
                    </div>
                </div>

                {/* IMG */}
                <div>
                    <img
                        src={FSImage}
                        alt="coding illustration"
                        className=" w-40 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20 "
                    />
                </div>

            </div>

            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between pb-5 md:py-20 md:px-20">
                {/* DESC */}
                <div className="pb-5 md:pb-0">
                    <p className="text-center font-bold font-mono md:hidden">
                        Credit Card Default Model
                    </p>


                    <div className="font-mono hidden md:block">
                        <h className = "font-bold">
                            Credit Card Default Model
                        </h>
                        <p>
                        Built a machine-learning model trained on credit card default data as a part of CPSC 330. Applied preprocessing techniques such as scaling and 
                        one-hot-encoding to the data, trained models with Logistic
                        Regression, Random Forest Classifier, and LGBM Classifier, and utilized GridSearchCV to optimize hyper-parameters. 
                        The trained model showed a 20% increase in predicative ability compared to the based model. 
                        
                      
                        </p>
                    </div>
                </div>

                {/* IMG */}
                <div>
                    <img
                        src={CCImage}
                        alt="coding illustration"
                        className=" w-40 md: w-3/4 m-auto rounded-xl shadow-xl shadow-[#7477FF]/20 "
                    />
                </div>
            </div>



        </section>
    
    
    
    );
    
    
    }
    
export default Projects;