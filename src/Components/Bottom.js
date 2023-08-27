import React ,{ useState, useEffect }from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Button} from 'antd';
import { StarOutlined, InfoCircleOutlined, HomeFilled } from '@ant-design/icons';
const { Footer } = Layout;


const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ffffff',
};

const Bottom = () => {
    const [discover,setDiscover] = useState(false)
    const [review,setReview] = useState(false)
    const [explore,setExplore] = useState(false)
    const navigate = useNavigate()
    
    const onReview = () => {
        navigate('/review', {replace: true})
    }

    const onExplore = () => {
        navigate('/explore', {replace: true})
    }

    const onDiscover = () => {
        navigate('/',{replace: true})
    }

    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/'){
            setDiscover(true)
            setReview(false)
            setExplore(false)
        }
    },[]);

    useEffect(() => {
        if (location.pathname == '/review'){
            setDiscover(false)
            setReview(true)
            setExplore(false)
        }
    },[]);

    useEffect(() => {
        if (location.pathname == '/explore'){
            setDiscover(false)
            setReview(false)
            setExplore(true)
        }
    },[]);

    return(
    <Footer style={footerStyle}> 
       { review && !explore && !discover &&
        <>
            <Button type="primary" shape="round" icon={<InfoCircleOutlined />} onClick={onExplore}/>&nbsp 
            <Button type="primary" shape="round" icon={<HomeFilled />} onClick={onDiscover}/> 
        </>
    }

    { !review && explore && !discover &&
        <>
            <Button type="primary" shape="round" icon={<StarOutlined />} onClick={onReview}/>&nbsp 
            <Button type="primary" shape="round" icon={<HomeFilled />} onClick={onDiscover}/> 
        </>
    }

    { !review && !explore && discover &&
        <>
            <Button type="primary" shape="round" icon={<StarOutlined />} onClick={onReview}/>&nbsp 
            <Button type="primary" shape="round" icon={<InfoCircleOutlined />} onClick={onExplore}/> 
        </>
    }
</Footer>
    )
}

export default Bottom;