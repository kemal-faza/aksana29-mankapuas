"use client";

import { Sidebar } from "flowbite-react";

export default function Header() {
	return (
		<Sidebar aria-label="Default sidebar example">
			<Sidebar.Logo
				href="#"
				img=""
				imgAlt="">
				Flowbite
			</Sidebar.Logo>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item href="#">Dashboard</Sidebar.Item>
					<Sidebar.Item href="#">Teachers</Sidebar.Item>
					<Sidebar.Item href="#">Students</Sidebar.Item>
					<Sidebar.Item href="#">Sign In</Sidebar.Item>
					<Sidebar.Item href="#">Sign Up</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
