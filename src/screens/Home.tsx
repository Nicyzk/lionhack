import { Box } from "@chakra-ui/react";
import { PreHomeScreenProps } from "../routes/NavigationProps";
import Dashboard from '../components/Dashboard'
import Address from '../components/Address'
import { useState } from 'react'

const Home: React.FC<PreHomeScreenProps> = ({ navigation }) => {
  const [dataScore, setDataScore] = useState({});
  const [dataHist, setDataHist] = useState({});
  const [loading, setLoading] = useState(false)

  return (
    <Box maxWidth={900} margin={"auto"} my={20}>
      <Address setDataHist={setDataHist} setDataScore={setDataScore} setLoading={setLoading}/>
      <Dashboard dataHist={dataHist} dataScore={dataScore} loading={loading}/>
    </Box>
  );
};

export default Home;
