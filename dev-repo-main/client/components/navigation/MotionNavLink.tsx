import { motion } from "framer-motion";
import { Link, type LinkProps } from "react-router-dom";

export const MotionNavLink = motion(Link);

export type MotionNavLinkProps = LinkProps;
