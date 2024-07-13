import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import InputElement from "../components/InputElement";
import SelectElement from "../components/SelectElement";
import lockIcon from "../assets/lock.svg";
import visa from "../assets/visacard.svg";
import mastercard from "../assets/mastercard.svg";
import americanExpress from "../assets/american-express.svg";
import stripe from "../assets/stripe.svg";
import paypal from "../assets/paypal.svg";
import applepay from "../assets/applepay.svg";
import { useNavigate } from "react-router-dom";
import useNavigateToTop from "../features/NavigateToTop";

const Checkout = () => {
    const {setCart} = useOutletContext();

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        country: '',
        town: '',
        state: '',
        zipCode: '',
        card: '',
        expirationDate: '',
        cvc: '',
    })
    
    const handleFormChange= (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/success");
        window.scrollTo(0, 0);

        setCart([]);
    }

    return(
        <form className="fs-200" id="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <fieldset>
                    <legend className="fs-400">Contact Information</legend>
                    <div className="flex gap-2">
                        <InputElement labelName="FIRST NAME" type="text" name="firstName"  placeholder="First name" value={formState.firstName} onChange={handleFormChange}/>
                        <InputElement labelName="LAST NAME" type="text" name="lastName"  placeholder="Last name" value={formState.lastName} onChange={handleFormChange}/>
                    </div>
                    <InputElement labelName="PHONE NUMBER" type="text" name="phone"  placeholder="Phone Number" value={formState.phone} onChange={handleFormChange} pattern="\d{11,}"/>
                    <InputElement labelName="EMAIL ADDRESS" type="text" name="email"  placeholder="Your Email" value={formState.email} onChange={handleFormChange}/>
                </fieldset>
            </div>
           <div className="form-group">
                <fieldset>
                    <legend className="fs-400">Shipping Address</legend>
                    <InputElement labelName="STREET ADDRESS" type="text" name="streetAddress"  placeholder="Street Address" value={formState.streetAddress} onChange={handleFormChange}/>
                    <SelectElement name="country" labelName="COUNTRY" value={formState.country} onChange={handleFormChange} />
                    <InputElement labelName="TOWN/CITY" type="text" name="town"  placeholder="Town/City" value={formState.town} onChange={handleFormChange}/>
                    <div className="flex gap-2">
                        <InputElement labelName="STATE" type="text" name="state"  placeholder="State" value={formState.state} onChange={handleFormChange}/>
                        <InputElement labelName="ZIP CODE" type="text" name="zipCode"  placeholder="Zip code" value={formState.zipCode} onChange={handleFormChange}/>
                    </div>
                </fieldset>
           </div>
            <div className="form-group">
                <fieldset>
                    <legend className="fs-400">Payment method</legend>
                    <div className="flex align-center gap-1 mg-bt-2">
                        <img cl src={lockIcon} alt="" />
                        <p>All transactions are secured, processedand authorized by external payment providers</p>
                    </div>
                    <div className="filter-control mg-bt-1">
                        <div className="flex">
                            <input type="radio" id="debitCard" name="paymentMethod" defaultChecked/>
                            <label htmlFor="debitCard">Pay by Credit or Debit Card</label>
                        </div>
                        <div className="flex gap-1">
                            <img src={visa} alt="" /><img src={mastercard} alt="" />
                        </div>
                    </div>
                    <div className="filter-control mg-bt-1">
                        <div className="flex">
                            <input type="radio" id="americanExpress" name="paymentMethod"/>
                            <label htmlFor="americanExpress">American Express </label>
                        </div>
                        <img src={americanExpress} alt="" />
                    </div>
                    <div className="filter-control mg-bt-1">
                        <div className="flex">
                            <input type="radio" id="stripe" name="paymentMethod"/>
                            <label htmlFor="stripe">Pay by Stripe </label>
                        </div>
                        <img src={stripe} alt="" />
                    </div>
                    <div className="filter-control mg-bt-1">
                        <div className="flex">
                            <input type="radio" id="paypal" name="paymentMethod"/>
                            <label htmlFor="paypal">Paypal</label>
                        </div>
                        <img src={paypal} alt="" />
                    </div>
                    <div className="filter-control mg-bt-1">
                        <div className="flex">
                            <input type="radio" id="applePay" name="paymentMethod"/>
                            <label htmlFor="applePay">ApplePay</label>
                        </div>
                        <img src={applepay} alt="" />
                    </div>

                    <InputElement labelName="CARD NUMBER" type="text" name="card"  placeholder="1234 1234 1234" value={formState.card} onChange={handleFormChange}/>
                    <div className="flex gap-2">
                        <InputElement labelName="EXPIRATION DATE" type="date" name="expirationDate"  placeholder="First name" value={formState.expirationDate} onChange={handleFormChange}/>
                        <InputElement labelName="CVC" type="text" name="cvc"  placeholder="CVC code" value={formState.cvc} onChange={handleFormChange} pattern="\d{3}"/>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}

export default Checkout;