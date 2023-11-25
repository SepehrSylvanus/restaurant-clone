import React from "react";
import styles from "./cookbook.module.css";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckBox from "../components/checkbox/CheckBox";
import Textarea from "../components/textarea/Textarea";
import { Divider } from "@mui/material";
const getData = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/independent?status=true"
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const getStates = async () => {
  const res = await fetch("http://localhost:3000/api/state");

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Cookbook = async () => {
  const data = await getData();
  const states = await getStates();
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <h1>Cookbook and Gift Certificates</h1>
        <div className={styles.aboutBook}>
          <h3>Kokkari: Contemporary Greek Flavors </h3>
          <hr className={styles.responsiveDivider} />
          <hr
            className={styles.responsiveDivider}
            style={{ marginBottom: "1em" }}
          />

          <div className={styles.aboutBookContents}>
            <div className={styles.textContainer}>
              <hr className={styles.bigDivider} />
              <hr
                className={styles.bigDivider}
                style={{ marginBottom: "5px" }}
              />

              <p>
                Long before fresh, seasonal, artisanal, and local became
                catchwords on every food-lovers lips, the Greeks had a developed
                as simple and irresistible cuisine based on the day’s catch from
                the sea, wild greens gathered on rocky hillsides, perfectly
                ripened orchard fruits, and patiently prepared feta cheese and
                thickened yogurt. Horta, Avgolemono, Tzatziki, Galaktoboureko.
                The brilliant flavors and unforgettable textures of bright lemon
                and fragile phyllo, the mouthwatering aroma of lamb roasting
                over an open fire resonate with every Greek heart and evoke
                strong memories of family gatherings and an age-old ethos of
                hospitality. Well into its second decade, Kokkari’s founders
                continue to greet the stranger as a friend and welcome diners in
                the best warm Greek fashion to a meal they won’t soon forget.
                Now they invite you to try some of their favorite dishes at
                home, and wish you a Greek bon appetit: kali orexi!
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={"/kokkari-cookbook.jpg"}
                alt=""
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.paymentFormContainer}>
          <form className={styles.paymentForm}>
            <h3 style={{ marginBottom: "1.5em" }}>
              Cookbook & Gift Certificate Order Form
            </h3>

            <div className={styles.goodToChoose}>
              <p style={{ marginTop: "1em", marginBottom: "2em" }}>
                We ship gift certificates and cookbooks to United States
                addresses only.
              </p>
              <p style={{ marginBottom: "1em" }}>
                Together they make a memorable gift.
              </p>
              <p style={{ fontWeight: "bold" }}>Cookbooks $40</p>
              <p style={{ marginBottom: ".75em" }}>
                Two cookbook maximum per order
              </p>
              <div className={styles.optionContainer}>
                <select name="cookBook" id="" className={styles.selectBox}>
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className={styles.selectIcon}>
                  <ArrowDropDownIcon className={styles.selectIconSelf} />
                </div>
              </div>

              <div className={styles.checkBoxContainer}>
                <CheckBox />
                <span>
                  {" "}
                  Gift Wrap <span style={{ color: "gray" }}>+$3.50</span>
                </span>
              </div>
              <p style={{ marginBottom: "1em", marginTop: "2em" }}>
                Gift certificate orders placed by 12pm PST Monday thru Friday
                will be processed and sent the same day. Orders received after
                12pm PST, over the weekend or on a holiday, will be processed
                and sent the next business weekday (Monday-Friday).
              </p>
              <p style={{ marginBottom: "1em" }}>
                Gift certificates purchased online will be shipped to the
                recipient via Federal Express or UPS and cannot be held at the
                restaurant for pickup. We cannot send gift certificates via US
                Mail or ship to a P.O Box.
              </p>
              <p style={{ marginBottom: "1em" }}>
                Gift certificates cannot be replaced if lost or stolen. By
                placing your order, you agree to these terms.
              </p>

              <Textarea />
            </div>

            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Billing Information</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />

              <div className={styles.billingInformationContents}>
                <h4>
                  Your Name<span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="firstName" />
                    <label style={{ display: "block" }} htmlFor="firstName">
                      First
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="lastName" />
                    <label style={{ display: "block" }} htmlFor="lastName">
                      Last
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.billingInformationContents}>
                <h4>
                  Billing Address <span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="streetAddress" />
                  <label style={{ display: "block" }} htmlFor="streetAddress">
                    Street Address
                  </label>
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="addressLine2" />
                  <label style={{ display: "block" }} htmlFor="addressLine2">
                    Address Line 2
                  </label>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="city" />
                    <label style={{ display: "block" }} htmlFor="city">
                      city
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="state" />
                    <label style={{ display: "block" }} htmlFor="state">
                      State / Province / Region
                    </label>
                  </div>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="zip" />
                    <label style={{ display: "block" }} htmlFor="zip">
                      ZIP / Postal Code
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <div className={styles.optionContainer}>
                      <select
                        name="cookBook"
                        id="country"
                        className={styles.selectBox}
                        style={{ display: "block" }}
                      >
                        <option value=""></option>
                        {data.map((item) => (
                          <option
                            value={item.name.common}
                            key={item.name.common}
                          >
                            {item.name.common}
                          </option>
                        ))}
                      </select>
                      <div className={styles.selectIcon}>
                        <ArrowDropDownIcon className={styles.selectIconSelf} />
                      </div>
                    </div>
                    <label
                      style={{ marginTop: 5, display: "block" }}
                      htmlFor="country"
                    >
                      Country
                    </label>
                  </div>
                </div>

                <div className={styles.firstItemFromEachContents}>
                  <h4 style={{ marginBottom: "1em", marginTop: "2.5em" }}>
                    Billing Address <span style={{ color: "red" }}>*</span>
                  </h4>
                  <input
                    type="text"
                    name=""
                    id="phoneNumber"
                    style={{ width: "47%" }}
                  />
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <h4 style={{ marginBottom: "1em", marginTop: "2.5em" }}>
                    Your Email <span style={{ color: "red" }}>*</span>
                  </h4>
                  <input
                    type="text"
                    name=""
                    id="phoneNumber"
                    style={{ width: "47%" }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Shipping Information</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />

              <div className={styles.billingInformationContents}>
                <h4>
                  Mail To Name<span style={{ color: "red" }}>*</span>
                </h4>

                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="firstName" />
                    <label style={{ display: "block" }} htmlFor="firstName">
                      First
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="lastName" />
                    <label style={{ display: "block" }} htmlFor="lastName">
                      Last
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.billingInformationContents}>
                <h4>
                  Shipping Address <span style={{ color: "red" }}>*</span>
                </h4>

                <p>
                  We ship gift certificates and cookbooks to United States
                  addresses only.
                </p>

                <div className={styles.checkBoxContainer}>
                  <CheckBox />
                  <span>Same As Billing Address</span>
                </div>

                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="streetAddress" />
                  <label style={{ display: "block" }} htmlFor="streetAddress">
                    Street Address
                  </label>
                </div>
                <div className={styles.firstItemFromEachContents}>
                  <input type="text" name="" id="addressLine2" />
                  <label style={{ display: "block" }} htmlFor="addressLine2">
                    Address Line 2
                  </label>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input type="text" name="" id="city" />
                    <label style={{ display: "block" }} htmlFor="city">
                      city
                    </label>
                  </div>
                  <div className={styles.firstItemFromEachContents}>
                    <div className={styles.optionContainer}>
                      <select
                        name="cookBook"
                        id="country"
                        className={styles.selectBox}
                        style={{ display: "block" }}
                      >
                        <option value=""></option>
                        {states.map((item) => (
                          <option value={item.name} key={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className={styles.selectIcon}>
                        <ArrowDropDownIcon className={styles.selectIconSelf} />
                      </div>
                    </div>
                    <label
                      style={{ display: "block", marginTop: 5 }}
                      htmlFor="state"
                    >
                      State
                    </label>
                  </div>
                </div>
                <div className={styles.firstItemFromEach}>
                  <div className={styles.firstItemFromEachContents}>
                    <input
                      type="text"
                      name=""
                      id="zip"
                      style={{ width: "47%" }}
                    />
                    <label style={{ display: "block" }} htmlFor="zip">
                      ZIP / Postal Code
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.billingInformation}>
              <h4 style={{ marginTop: "4em" }}>Shipping and Tax
</h4>
              <Divider
                sx={{
                  backgroundColor: "white",
                  marginTop: "1em",
                  marginBottom: "1.3em",
                }}
              />
<h4>Gift Certificate Delivery Via FedEx or UPS
</h4>


<div className={styles.checkBoxContainer}>
                <CheckBox />
                <span>
                  {" "}
                  Gift Wrap <span style={{ color: "gray" }}>+$3.50</span>
                </span>
              </div>
              
              <div className={styles.checkBoxContainer}>
                <CheckBox />
                <span>
                  {" "}
                  Gift Wrap <span style={{ color: "gray" }}>+$3.50</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
