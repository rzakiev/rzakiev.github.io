import React from "react";
import { HashRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

import { PortfolioChart } from "./Pages/Portfolio/PortfolioChart";
import { InvestmentIdeasPage } from "./Pages/InvestmentIdea/InvestmentIdeasChart/InvestmentIdeasChart";
import "./App.css";
import { Breadcrumb, theme } from "antd";

import { MenuProps } from "antd";
const { Header } = Layout;

const { Content, Sider } = Layout;

export function App() {
    return (
        <HashRouter>
            <Layout>
                <HeaderComponent />
                <Layout hasSider>
                    <SiderComponent />
                    <AppContent />
                </Layout>
            </Layout>
        </HashRouter>
    );
}

export default App;

function AppContent() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ padding: "0 24px 24px", marginLeft: "200px", marginTop: "64px", position: "sticky", top: 64 }}>
            <Breadcrumb style={{ margin: "16px 0", position: "sticky", top: 64 }}>
                <Breadcrumb.Item>Идеи</Breadcrumb.Item>
                <Breadcrumb.Item>Malishok</Breadcrumb.Item>
            </Breadcrumb>

            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="/ideas" />} />
                    <Route path="/ideas" element={<InvestmentIdeasPage />} />
                    <Route path="/portfolio" element={<PortfolioChart />} />
                    <Route path="/longcontent" element={<LongContent />} />
                </Routes>
            </Content>
        </Layout>
    );
}

export function HeaderComponent() {
    function headerSectionTitleFor(key: string): string {
        switch (key) {
            case "ideas":
                return "Идеи";
            default:
                return key;
        }
    }
    const items1: MenuProps["items"] = ["ideas"].map((key) => ({
        key,
        label: headerSectionTitleFor(key),
    }));

    return (
        <Header style={{ position: "fixed", top: 0, zIndex: 1, width: "100%" }}>
            <img src="headerLogo.png" alt="Website's logo" className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["ideas"]} items={items1} />
        </Header>
    );
}

function LongContent() {
    const thousandParagraphs = Array.from(Array(1000).keys()).map((i) => <p>i</p>);
    return <div style={{ position: "sticky", top: 84 }}>{thousandParagraphs}</div>;
}

function SiderComponent() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Sider
            width={200}
            style={{
                height: `calc(100vh - 64px)`,
                position: "fixed",
                marginTop: 64,
                background: colorBgContainer,
            }}
        >
            <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ borderRight: 0 }}>
                <Menu.Item key="1">
                    <BarChartOutlined />
                    <span>Malishok</span>
                    <Link to="/ideas" />{" "}
                </Menu.Item>{" "}
                {/* <Menu.Item key="2">
                    <PieChartOutlined />
                    <span>Portfolio</span>
                    <Link to="/portfolio" />{" "}
                </Menu.Item>
                <Menu.Item key="3">
                    <PieChartOutlined />
                    <span>Long Content</span>
                    <Link to="/longcontent" />{" "}
                </Menu.Item> */}
            </Menu>
        </Sider>
    );
}
