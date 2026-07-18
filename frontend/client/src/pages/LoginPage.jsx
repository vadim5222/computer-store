import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {


  return (
    <div>
      <section className="container mx-auto mb-14 p-10">
        <h1 className="text-4xl mb-10 font-bold">Customer Login</h1>
        <div className="flex justify-center">
          <div className="flex items-center gap-6">
            <div className="bg-blue-50 p-16">
              <h1 className="font-bold mb-3">Registered Customers</h1>
              <p className="mb-3 font-light">If you have an account, sign in with your email address.</p>
              <LoginForm />
            </div>
            <div className="bg-blue-50 pl-14 pt-16 pb-28 pr-72">
              <h1 className="font-bold text-2xl mb-7">New customer?</h1>
              <p className="font-light mb-6">Creating an account has many benefits:</p>
              <nav className="mb-9">
                <ul>
                  <li>Check out faster</li>
                  <li>Keep more than one address</li>
                  <li>Track orders and more</li>
                </ul>
              </nav>
              <button className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl'><Link to='/register'>Create An Account</Link></button>
            </div>
          </div>
        </div>
      </section> 
      <section className="bg-blue-50 p-16">
        <div className="flex items-center justify-center gap-32">
        <div>
          <img className="m-auto mb-7" src="/Support.png" alt="support" />
          <h1 className="text-center mb-3">Product Support</h1>
          <p className="w-3xs text-center">Up to 3 years on-site warranty available for your peace of mind.</p>
        </div>
        <div>
          <img className="m-auto mb-7" src="/Account.png" alt="account" />
          <h1 className="text-center mb-3">Personal Account</h1>
          <p className="w-3xs text-center">With big discounts, free delivery and a dedicated support specialist.</p>
        </div>        <div>
          <img className="m-auto mb-7" src="/Saving.png" alt="saving" />
          <h1 className="text-center mb-3">Amazing Savings</h1>
          <p className="w-3xs text-center">Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
      </div>
      </section>
    </div>
  )
}

export default LoginPage