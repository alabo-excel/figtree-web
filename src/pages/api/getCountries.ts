import { NextApiRequest, NextApiResponse } from "next"
import countries from "./countries.json"

export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<any> {
	try {
		return res.json(countries.map((country) => country.country))
	} catch (error) {
		console.log(error)
		return res.json({
			success: false,
		})
	}
}
