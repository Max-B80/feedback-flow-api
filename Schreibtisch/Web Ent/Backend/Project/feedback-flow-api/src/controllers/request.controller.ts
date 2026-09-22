import type { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 1. Create a new feature request
export const createRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, authorId } = req.body;

    const userExists = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!userExists) {
      return res.status(404).json({ error: "Author not found" });
    }

    const newRequest = await prisma.featureRequest.create({
      data: { title, description, authorId },
    });

    return res.status(201).json(newRequest);
  } catch (error) {
    next(error);
  }
};

// 2. Fetch all feature requests
export const getAllRequests = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requests = await prisma.featureRequest.findMany({
      include: { author: { select: { id: true, name: true, email: true } } },
    });
    return res.json(requests);
  } catch (error) {
    next(error);
  }
};

// 3. Upvote a feature request
export const upvoteRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const request = await prisma.featureRequest.findUnique({
      where: { id },
    });

    if (!request) {
      return res.status(404).json({ error: "Feature request not found" });
    }

    const updatedRequest = await prisma.featureRequest.update({
      where: { id },
      data: {
        upvotedBy: {
          connect: { id: userId },
        },
      },
      include: {
        _count: { select: { upvotedBy: true } },
      },
    });

    return res.json({
      message: "Upvoted successfully",
      upvoteCount: updatedRequest._count.upvotedBy,
    });
  } catch (error) {
    next(error);
  }
};