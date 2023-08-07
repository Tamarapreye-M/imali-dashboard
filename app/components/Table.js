import React from "react";
import Badge from "./Badge";

function Table({ headers, data }) {
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto shadow-md sm:rounded-lg">
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden ">
						<table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
							<thead className="bg-gray-100 ">
								<tr>
									<th scope="col" className="p-4">
										<div className="flex items-center">
											<input
												id="checkbox-all"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label htmlFor="checkbox-all" className="sr-only">
												checkbox
											</label>
										</div>
									</th>
									{headers.map((header, i) => {
										return (
											<th
												key={i}
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 "
											>
												{header}
											</th>
										);
									})}
									{/* <th scope="col" className="p-4">
                    <span className="sr-only"></span>
                  </th> */}
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{data.map((row, i) => {
									return (
										<tr key={i} className=" hover:bg-gray-100">
											<td className="p-4 w-4">
												<div className="flex items-center">
													<input
														id="checkbox-table-1"
														type="checkbox"
														className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
													/>
													<label htmlFor="checkbox-table-1" className="sr-only">
														checkbox
													</label>
												</div>
											</td>
											{Object.values(row).map((item, i) => {
												return (
													<>
														<td
															key={i}
															className={`py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap `}
														>
															{typeof item == "string" &&
															item.toLowerCase() == "failed" ? (
																<Badge
																	textColor={"#B42318"}
																	textTitle={"Failed"}
																	background={"#FEF3F2"}
																/>
															) : typeof item == "string" &&
															  item.toLowerCase() == "successful" ? (
																<Badge
																	textColor={"#027A48"}
																	textTitle={"Successful"}
																	background={"#ECFDF3"}
																/>
															) : typeof item == "string" &&
															  item.toLowerCase() == "verified" ? (
																<Badge
																	textColor={"#027A48"}
																	textTitle={"Active"}
																	background={"#ECFDF3"}
																/>
															) : (
																item
															)}
														</td>
													</>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Table;
