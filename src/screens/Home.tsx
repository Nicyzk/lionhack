import { Box } from "@chakra-ui/react";
import { PreHomeScreenProps } from "../routes/NavigationProps";
import Dashboard from '../components/Dashboard'
import Address from '../components/Address'
import { useState } from 'react'

const Home: React.FC<PreHomeScreenProps> = ({ navigation }) => {
  const [dataScore, setDataScore] = useState({});
  const [accData, setAccData] = useState({});
  const [loading, setLoading] = useState(false)

  return (
    <Box maxWidth={1050} margin={"auto"} my={20}>
      <Address setAccData={setAccData} setDataScore={setDataScore} setLoading={setLoading} dataScore={dataScore}/>
      <Dashboard accData={accData} dataScore={dataScore} loading={loading}/>
    </Box>
  );
};

export default Home;
