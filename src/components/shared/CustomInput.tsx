import { TextField } from "@mui/material";

type Props = {
    name:string;
    type:string;
    label:string;
}

const CustomInput = (props: Props) => {
    return (
        <TextField
            InputLabelProps={{style:{color:"white"}}}
            name={props.name}
            label={props.label}
            type={props.type}
            InputProps={{style:{color:"white",width:"400px",borderRadius:10,fontSize:20}}}
        />
    )
}

export default CustomInput
