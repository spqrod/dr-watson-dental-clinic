import "../styles/blog.css";
import Popup from '../components/Popup.js';

function Blog() {
    return (
        <section>
            <Popup />

            <h1>Our Dental Blog</h1>
            <p className="headline">Read our latest tips and tricks on how to care for your teeth and mouth</p>
            <div id="blogPostsContainer">
                <div className="blogPost">
                    {/* <!-- <img src="" alt="" className="blogPost-image"> --> */}
                    <h2>Teeth Whitening</h2>
                    <p>
                        Have you ever noticed that when children grow their first set of permanent teeth, they look very white in colour, like on our advertising pictures?<br/><br/>
                        We'll explain what happens as we age and what can be done about it.
                    </p>
                    <div className="button"><a href="https://drwatsondental.com/blog/teeth-whitening">Read</a></div>
                </div>
                <div className="blogPost">
                    {/* <!-- <img src="" alt="" className="blogPost-image"> --> */}
                    <h2>How to brush your teeth</h2>
                    <p>
                        Brushing your teeth incorrectly is like eating soup with a fork. Very little gets done and the soup is not enjoyed.<br/><br/>
                        Here we will discover why it’s important to brush your teeth properly, how to do that, and what happens if you don’t.
                    </p>
                    <div className="button"><a href="https://drwatsondental.com/blog/how-to-brush-your-teeth">Read</a></div>
                </div>
                <div className="blogPost">
                    {/* <!-- <img src="" alt="" className="blogPost-image"> --> */}
                    <h2>Do we really need flossing?</h2>
                    <p>
                        Ever wondered what flossing (apart from the popular dance move) means exactly?<br/><br/>		
                        We have been told that it helps us maintain our oral health. Is that really so, or is there something more to it? Let us try to find out why, exactly, flossing needs to become a part of our daily routine.
                    </p>
                    <div className="button"><a href="https://drwatsondental.com/blog/flossing">Read</a></div>
                </div>
                <div className="blogPost">
                    {/* <!-- <img src="" alt="" className="blogPost-image"> --> */}
                    <h2>Be your own dentist</h2>
                    <p>
                        Yes, you need to brush your teeth every day. No, this is not enough. <br/><br/>
                        Just by brushing your teeth, you can’t prevent oral problems like bad breath, gingivitis, cavities and others. Yet if you care for your teeth properly, you will have much less occasions to visit your dentist. This will save you a lot of money, time and comfort.
                    </p>
                    <div className="button"><a href="https://drwatsondental.com/blog/how-to-be-your-own-dentist">Read</a></div>
                </div>
            </div>
        </section>
    );
}

export default Blog;