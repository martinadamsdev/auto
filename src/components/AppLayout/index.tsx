import { FC, ReactNode } from 'React';
import { Layout, Menu, theme, Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const {Content, Sider, Footer } = Layout;

interface AppLayoutProps {
    children?: ReactNode[];
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    mode="inline"
                >
                    <Menu.Item key="/">
                        <Link to="/">主页</Link>
                    </Menu.Item>
                    <Menu.Item key="/personnel">
                        <Link to="/personnel">人员</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Martin Adams ©{new Date().getFullYear()} Created by ReactCamp
                </Footer>
        </Layout>
</Layout>
)
    ;
};