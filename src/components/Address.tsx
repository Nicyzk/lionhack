import { Input, Button, Box, Stack } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'
type AddressProps = {
    setDataHist: (data: any) => void;
    setDataScore: (data: any) => void;
    setLoading: (data: any) => void;
  };
const Address = ({ setDataHist, setDataScore, setLoading }: AddressProps) => {
    const [addr, setAddr] = useState('');
    async function handleSubmit(e: any) {
        e.preventDefault();

        console.log('Submitted value:', addr);
        let result
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        result = await axios.post("http://127.0.0.1:5000/api/v0/txhist", {
            "walletAddr": addr
        })
        const hist = result.data
        result = await axios.post("http://127.0.0.1:5000/api/v0/score", {
            "walletAddr": addr
        })
        const score = result.data
        setDataHist(hist)
        setDataScore(score)
        console.log(hist)
        console.log(score)
        setLoading(false)
        // do something with the input value, such as send it to a server
    }
    return (
        <>
            <Box m={[2, 20]}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} direction='row' align='center'>
                        <Input placeholder='Wallet Address' border='1px' borderColor='gray.400'
                            value={addr}
                            onChange={(e: any) => setAddr(e.target.value)} />
                        <Button type="submit" minWidth={100} colorScheme='blue' size='md'>Done</Button>
                    </Stack>
                </form>
            </Box>
        </>
    )
}

export default Address
