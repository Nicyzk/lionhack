import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import Overview from './Overview'
import NFT from './NFT'

const Dashboard = (props: any) => {
    const {dataScore, accData, loading} = props
    console.log(accData)
    return (
        <Tabs>
            <TabList my="10">
                <Tab>Overview</Tab>
                <Tab>NFTs</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Overview dataScore={dataScore} accData={accData} loading={loading}/>
                </TabPanel>
                <TabPanel>
                    <NFT dataScore={dataScore} accData={accData} loading={loading}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Dashboard