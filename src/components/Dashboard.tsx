import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Overview from './Overview'

const Dashboard = (props: any) => {
    const {dataScore, dataHist, loading} = props

    return (
        <Tabs>
            <TabList my="10">
                <Tab>Overview</Tab>
                <Tab>Portfolio</Tab>
                <Tab>NFTs</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Overview dataScore={dataScore} dataHist={dataHist} loading={loading}/>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Dashboard