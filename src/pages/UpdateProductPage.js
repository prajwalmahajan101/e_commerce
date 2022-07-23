// Custom Hook For the For Input
import { useFormData } from "../utils";
// Styled function From the Styled Component Library
import styled from "styled-components";
// use Navigate Function format React Router Dom to redirect After submit of Form
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {updateProductAction} from "../actions";
// Styled Components
const StyledForm = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  border: 2px solid #efefef;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`
const StyledFormField = styled.div`
  width: 95%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  label {
    font-size: 30px;
    font-weight: bolder;
    display: block;
    margin: 5px;
  }
  input {
    width: 98%;
    height: 30px;
    border: 2px solid #978a8a;
    border-radius: 3px;
    font-size: 25px;
    margin: 5px auto;
  }
`;

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  background-color: black;
  font-size: 20px;
  margin: 0px 50px;
`;

const FromControls = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledHeading = styled.h1`
  margin:40px auto;
  text-align:center;
`


// React function
const UpdateProductPage = (props) => {
    const { productId } =  useParams();
    // navigate function
    const navigate = useNavigate();
    const [name,setName] = useFormData("");
    const [description,setDescription] = useFormData("");
    const [rating,setRating] = useFormData("");
    const [price,setPrice] = useFormData("");
    const [img,setImg] = useFormData("");

    const store = props.store;
    useEffect(()=>{
        const {products} = store.getState();
        let product = products.filter((el)=>el.id===productId);
        if(product.length===0){
            return <StyledHeading>Go Back to <Link to={"/"}>Home</Link></StyledHeading>
        }
        else{
            product=product[0];
        }
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setRating(product.rating);
        setImg(product.img);
    },[productId, setDescription, setImg, setName, setPrice, setRating, store]);

    // submit Handler function
    const submitHandler = async (e) => {
        // Prevent to Submit for the normal way
        e.preventDefault();
        // call for the creation Product
        // const response = await createProduct({
        //     name:name.value,
        //     description:description.value,
        //     price:price.value,
        //     rating:rating.value,
        //     img:img.value
        // })
        // store.dispatch(updateProductAction(data))
        // console.log(store.getState())

        const data= {
            id:productId,
            name:name.value,
            description:description.value,
            price:price.value,
            rating:rating.value,
            img:img.value
        }
        store.dispatch(updateProductAction(data))
        navigate("/")
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <StyledForm>
                    <StyledFormField>
                        <label>Name</label>
                        <input {...name} required />
                    </StyledFormField>
                    <StyledFormField >
                        <label>Description</label>
                        <input {...description} required />
                    </StyledFormField>
                    <StyledFormField >
                        <label>Price</label>
                        <input type={'number'} step={1} {...price} min={0} required /></StyledFormField>
                    <StyledFormField >
                        <label>Rating</label>
                        <input {...rating} type={'number'} step={0.1} min={0.0} max={5.0} required /></StyledFormField>
                    <StyledFormField >
                        <label>Image URL</label>
                        <input {...img} type={'url'} required />
                    </StyledFormField>
                    <FromControls>
                        <StyledButton>Update</StyledButton>
                    </FromControls>
                </StyledForm>
            </form>
        </div>
    );
};

export default UpdateProductPage;