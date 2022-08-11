import React from "react";
import "antd/dist/antd.css";
import { Avatar, List } from "antd";
const Donate = () => (
  <>
    <div>
      <List itemLayout="horizontal" dataSource="none" />
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://img.pikbest.com/png-images/qiantu/gold-coin-stacking-pattern-design_2632943.png!bw800" />
          }
          title={<a href="https://www.savebuzzardsbay.org/">Buzzards Bay</a>}
          description="It’s your Bay, so get outside and enjoy it! Whether on the water or on land, you can find an outdoor activity and discover your Buzzards Bay today."
        />
      </List.Item>
    </div>
    <div>
      <List itemLayout="horizontal" dataSource="none" />
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://img.pikbest.com/png-images/qiantu/gold-coin-stacking-pattern-design_2632943.png!bw800" />
          }
          title={<a href="https://caltrout.org/">California Trout</a>}
          description="At California Trout, our goal is to restore vibrance and abundance to California's freshwater ecosystems, and to keep them that way for years to come. With the help of many local and national organizations, we've worked to improve the habitats of several fish species throughout California."
        />
      </List.Item>
    </div>
    <div>
      <List itemLayout="horizontal" dataSource="none" />
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://img.pikbest.com/png-images/qiantu/gold-coin-stacking-pattern-design_2632943.png!bw800" />
          }
          title={<a href="https://oceanconservancy.org/">Ocean Conservancy</a>}
          description="Ocean Conservancy is working with you to protect the ocean from today’s greatest challenges."
        />
      </List.Item>
    </div>
    <div>
      <List itemLayout="horizontal" dataSource="none" />
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://img.pikbest.com/png-images/qiantu/gold-coin-stacking-pattern-design_2632943.png!bw800" />
          }
          title={
            <a href="http://www.wetlands-initiative.org/">
              The Wetlands Initiative
            </a>
          }
          description="Envisioning a world with plentiful healthy wetlands improving water quality, climate, biodiversity, and human well-being."
        />
      </List.Item>
    </div>
    <div>
      <List itemLayout="horizontal" dataSource="none" />
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://img.pikbest.com/png-images/qiantu/gold-coin-stacking-pattern-design_2632943.png!bw800" />
          }
          title={
            <a href="https://www.pacificenvironment.org/">
              Pacific Environment
            </a>
          }
          description="People hold leaders accountable. We partner with local activists to demand justice in courts, to access information about environmental harms, and to involve local people in decisions that impact their health and livelihoods."
        />
      </List.Item>
    </div>
  </>
);
export default Donate;
