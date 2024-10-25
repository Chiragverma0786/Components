import React from 'react'
import './page1.css'
import Code from '/src/images/laptop.png'
import Code2 from '/src/images/laptop.png'
import Code3 from '/src/images/laptop.png'
import Code4 from '/src/images/laptop.png'
import Code5 from '/src/images/laptop.png'
import Code6 from '/src/images/laptop.png'
import Tools from '../../components/tools/tools'
import Header from '../../components/header'

const Page1 = ({page1Style}) => {
  return (
    <div className="page1" style={{backgroundColor : page1Style}}>
        <div className="one">
            <p>USEFUL FEATURE</p>
        </div>

        <div className="two">
            <h2>Everything you need <span>to start your next project</span></h2>
        </div>

        <div className="three">
            <p>Not just a set of tools, the package includes ready-to-deploy conceptual application.</p>
        </div>

        <div className="four">
            <div className="com">
                <Tools 
                CodeImg={Code} 
                CodeTitle="Quality Code" 
                CodePara="Code structure that all developers will easily" 
                CodePara2="understand and fall in love with." />
            </div>

            <div className="com">
                <Tools CodeImg={Code}
                CodeTitle="Continuous Updates" 
                CodePara="Free updates for the next 12 months, including new" 
                CodePara2="demos and features." />
            </div>

            <div className="com">
                <Tools CodeImg={Code}
                CodeTitle="Stater-Kit" 
                CodePara="Start your project quickly without having to remove" 
                CodePara2="unnecessary features." />
            </div>

            <div className="com">
                <Tools CodeImg={Code}
                CodeTitle="API Ready" 
                CodePara="Just change the endpoint and see your own data" 
                CodePara2="loaded within seconds." />
            </div>

            <div className="com">
                <Tools CodeImg={Code}
                CodeTitle="Excellent Support" 
                CodePara="An easy-to-follow doc with lots of references and" 
                CodePara2="code examples." />
            </div>

            <div className="com">
                <Tools CodeImg={Code}
                CodeTitle="Well Documented" 
                CodePara="An easy-to-follow doc with lots of references and" 
                CodePara2="code examples." />
            </div>
        </div>
    </div>
  )
}

export default Page1